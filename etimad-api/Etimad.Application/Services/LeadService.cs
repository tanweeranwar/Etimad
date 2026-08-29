using Etimad.Application.Contracts.Leads;
using Etimad.Application.Interfaces;
using Etimad.Domain.Entities;

namespace Etimad.Application.Services;

public sealed class LeadService : ILeadService
{
    private readonly ILeadRepository _leadRepository;

    public LeadService(ILeadRepository leadRepository)
    {
        _leadRepository = leadRepository;
    }

    public async Task<CreateLeadResponse> CreateAsync(
        CreateLeadRequest request,
        CancellationToken cancellationToken = default)
    {
        var lead = new Lead(
            request.Name.Trim(),
            string.IsNullOrWhiteSpace(request.Company)
                ? null
                : request.Company.Trim(),
            request.Email.Trim(),
            request.Country.Trim(),
            request.Service.Trim(),
            request.Message.Trim());

        await _leadRepository.AddAsync(
            lead,
            cancellationToken);

        await _leadRepository.SaveChangesAsync(
            cancellationToken);

        return new CreateLeadResponse(
            lead.Id,
            "Your enquiry has been received.");
    }
}