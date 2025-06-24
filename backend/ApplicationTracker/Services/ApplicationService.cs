using ApplicationTracker.Models;

namespace ApplicationTracker.Services;

public static class ApplicationService
{
    static List<Application> Applications { get; }
    static int nextId = 3;
    static ApplicationService()
    {
        Applications = new List<Application>
{
   new Application { Id = 1, CompanyName = "Tech Solutions Inc", JobTitle = "Software Developer", SubmissionDate = "1-15-25", ResponseDate = "1-18-25", Result = "Interview Scheduled" },
   new Application { Id = 2, CompanyName = "Digital Innovations", JobTitle = "Frontend Developer", SubmissionDate = "1-20-25", ResponseDate = "1-22-25", Result = "Pending" },
   new Application { Id = 3, CompanyName = "Cloud Systems Corp", JobTitle = "Full Stack Developer", SubmissionDate = "1-25-25", ResponseDate = "", Result = "No Response" }
};
    }

    public static List<Application> GetAll() => Applications;

    public static Application? Get(int id) => Applications.FirstOrDefault(a => a.Id == id);

    public static void Add(Application application)
    {
        application.Id = nextId++;
        Applications.Add(application);
    }

    public static void Delete(int id)
    {
        var applicationToDelete = Get(id);
        if(applicationToDelete is null)
            return;

        Applications.Remove(applicationToDelete);
    }

    public static void Update(Application application)
    {
        var index = Applications.FindIndex(a => a.Id == application.Id);
        if(index == -1)
            return;

        Applications[index] = application;
    }
}
