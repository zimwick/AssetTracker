using AssetTracker_BackEnd.Contracts;
using AssetTracker_BackEnd.Data;
using AssetTracker_BackEnd.Models.Asset;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AssetTracker_BackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AssetsController : ControllerBase
    {
        private readonly IMapper _mapper;
        private readonly IAssetsRepository _assetsRepository;

        public AssetsController(IMapper mapper, IAssetsRepository assetsRepository)
        {
            this._mapper = mapper;
            this._assetsRepository = assetsRepository;
        }

        // GET: api/Assets
        [HttpGet]
        public async Task<ActionResult<IEnumerable<AssetDto>>> GetAssets()
        {
            var assets = await _assetsRepository.GetAllAsync();
            var records = _mapper.Map<List<AssetDto>>(assets);
            return Ok(records);
        }

        // GET: api/Assets/5
        [HttpGet("{id}")]
        public async Task<ActionResult<AssetDto>> GetAsset(int id)
        {
            var asset = await _assetsRepository.GetAsync(id);

            if (asset == null)
            {
                return NotFound();
            }

            var assetDto = _mapper.Map<AssetDto>(asset);

            return Ok(assetDto);
        }

        // PUT: api/Assets/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAsset(int id, UpdateAssetDto updateAssetDto)
        {
            if (id != updateAssetDto.Id)
            {
                return BadRequest("Inbalid Record Id");
            }

            var asset = await _assetsRepository.GetAsync(id);

            if (asset == null)
            {
                return NotFound();
            }

            _mapper.Map(updateAssetDto, asset);

            try
            {
                await _assetsRepository.UpdateAsync(asset);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!await AssetExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Assets
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Asset>> PostAsset(CreateAssetDto createAssetDto)
        {

            var asset = _mapper.Map<Asset>(createAssetDto);

            await _assetsRepository.AddAsync(asset);

            return CreatedAtAction("GetAsset", new { id = asset.Id }, asset);
        }

        // DELETE: api/Assets/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAsset(int id)
        {
            var asset = await _assetsRepository.GetAsync(id);
            if (asset == null)
            {
                return NotFound();
            }

            await _assetsRepository.DeleteAsync(id);

            return NoContent();
        }

        private async Task<bool> AssetExists(int id)
        {
            return await _assetsRepository.Exists(id);
        }
    }
}
