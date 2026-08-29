using Etimad.Application.Contracts.Leads;
using Etimad.Application.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Etimad.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public sealed class LeadsController : ControllerBase
{
    private readonly ILeadService _leadService;

    public LeadsController(ILeadService leadService)
    {
        _leadService = leadService;
    }

    [HttpPost]
    [ProducesResponseType(typeof(CreateLeadResponse), StatusCodes.Status201Created)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public async Task<ActionResult<CreateLeadResponse>> Create(
        [FromBody] CreateLeadRequest request,
        CancellationToken cancellationToken)
    {
        var response = await _leadService.CreateAsync(
            request,
            cancellationToken);

        return StatusCode(
            StatusCodes.Status201Created,
            response);
    }
}