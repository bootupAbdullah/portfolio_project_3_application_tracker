namespace ApplicationTracker.Models;

public class Application
{
    public int Id { get; set; }
    public string? CompanyName { get; set; }
    public string? JobTitle { get; set; }
    public string? SubmissionDate { get; set; }
    public string? ResponseDate {get; set; }

    public string? Result {get; set; }

}