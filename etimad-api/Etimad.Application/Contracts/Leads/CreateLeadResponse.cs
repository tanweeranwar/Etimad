namespace Etimad.Application.Contracts.Leads;

public sealed record CreateLeadResponse(
    Guid Id,
    string Message);