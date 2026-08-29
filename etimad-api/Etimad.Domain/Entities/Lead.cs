namespace Etimad.Domain.Entities;

public class Lead
{
    public Guid Id { get; private set; }

    public string Name { get; private set; } = string.Empty;

    public string? Company { get; private set; }

    public string Email { get; private set; } = string.Empty;

    public string Country { get; private set; } = string.Empty;

    public string Service { get; private set; } = string.Empty;

    public string Message { get; private set; } = string.Empty;

    public LeadStatus Status { get; private set; }

    public DateTime CreatedAt { get; private set; }

    public DateTime? UpdatedAt { get; private set; }

    private Lead()
    {
    }

    public Lead(
        string name,
        string? company,
        string email,
        string country,
        string service,
        string message)
    {
        Id = Guid.NewGuid();

        Name = name;
        Company = company;
        Email = email;
        Country = country;
        Service = service;
        Message = message;

        Status = LeadStatus.New;

        CreatedAt = DateTime.UtcNow;
    }

    public void MarkAsContacted()
    {
        Status = LeadStatus.Contacted;
        UpdatedAt = DateTime.UtcNow;
    }

    public void MarkAsQualified()
    {
        Status = LeadStatus.Qualified;
        UpdatedAt = DateTime.UtcNow;
    }

    public void MarkAsProposal()
    {
        Status = LeadStatus.Proposal;
        UpdatedAt = DateTime.UtcNow;
    }

    public void MarkAsWon()
    {
        Status = LeadStatus.Won;
        UpdatedAt = DateTime.UtcNow;
    }

    public void MarkAsLost()
    {
        Status = LeadStatus.Lost;
        UpdatedAt = DateTime.UtcNow;
    }
}

public enum LeadStatus
{
    New = 1,
    Contacted = 2,
    Qualified = 3,
    Proposal = 4,
    Won = 5,
    Lost = 6
}