namespace ApplicationTracker.Models;

public class Application
{
    public int Id { get; set; }
    public string? CompanyName { get; set; }
    public string? JobTitle { get; set; }
    public DateTime SubmissionDate { get; set; }
    public DateTime ResponseDate {get; set; }

}