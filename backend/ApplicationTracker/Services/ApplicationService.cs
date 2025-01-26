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
            new Application { Id = 1, CompanyName = "Booz Allen", JobTitle = "Back-End Developer, Jr", SubmissionDate = "1-22-25", ResponseDate = "1-23-25", Result = "Pending" },
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
