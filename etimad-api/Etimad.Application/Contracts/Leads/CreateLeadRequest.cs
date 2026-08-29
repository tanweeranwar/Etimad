using System.ComponentModel.DataAnnotations;

namespace Etimad.Application.Contracts.Leads;

public sealed class CreateLeadRequest
{
    [Required]
    [StringLength(100, MinimumLength = 2)]
    public string Name { get; init; } = string.Empty;

    [StringLength(150)]
    public string? Company { get; init; }

    [Required]
    [EmailAddress]
    [StringLength(254)]
    public string Email { get; init; } = string.Empty;

    [Required]
    [StringLength(100)]
    public string Country { get; init; } = string.Empty;

    [Required]
    [StringLength(100)]
    public string Service { get; init; } = string.Empty;

    [Required]
    [StringLength(5000, MinimumLength = 10)]
    public string Message { get; init; } = string.Empty;
}