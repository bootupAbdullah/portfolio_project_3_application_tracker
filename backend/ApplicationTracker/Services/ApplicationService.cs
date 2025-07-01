using ApplicationTracker.Models;

namespace ApplicationTracker.Services;

public static class ApplicationService
{
    static Dictionary<string, List<Application>> SessionApplications { get; } = new();
    static Dictionary<string, int> SessionNextIds { get; } = new();

    private static List<Application> GetSessionApplications(string sessionId)
    {
        if (!SessionApplications.ContainsKey(sessionId))
        {
            SessionApplications[sessionId] = new List<Application>
            {
                new Application { Id = 1, CompanyName = "Tech Solutions Inc", JobTitle = "Software Developer", SubmissionDate = "1-15-25", ResponseDate = "1-18-25", Result = "Interview Scheduled" },
                new Application { Id = 2, CompanyName = "Digital Innovations", JobTitle = "Frontend Developer", SubmissionDate = "1-20-25", ResponseDate = "1-22-25", Result = "Pending" },
                new Application { Id = 3, CompanyName = "Cloud Systems Corp", JobTitle = "Full Stack Developer", SubmissionDate = "1-25-25", ResponseDate = "", Result = "No Response" }
            };
            SessionNextIds[sessionId] = 4;

        }
        return SessionApplications[sessionId];

    }

    private static int GetNextId(string sessionId)
    {
        if (!SessionNextIds.ContainsKey(sessionId))
            SessionNextIds[sessionId] = 4;

        return SessionNextIds[sessionId]++;
    }

    public static List<Application> GetAll(string sessionId) => GetSessionApplications(sessionId);

    public static Application? Get(int id, string sessionId) =>
        GetSessionApplications(sessionId).FirstOrDefault(a => a.Id == id);

    public static void Add(Application application, string sessionId)
    {
        application.Id = GetNextId(sessionId);
        GetSessionApplications(sessionId).Add(application);
    }

    public static void Delete(int id, string sessionId)
    {
        var applications = GetSessionApplications(sessionId);
        var applicationToDelete = applications.FirstOrDefault(a => a.Id == id);

        if (applicationToDelete is null)
            return;

        applications.Remove(applicationToDelete);
    }

    public static void Update(Application application, string sessionId)
    {

        var applications = GetSessionApplications(sessionId);
        var index = applications.FindIndex(a => a.Id == application.Id);

        if (index == -1)
            return;

        applications[index] = application;
    }

    public static void ResetAll(string sessionId)
    {
        if (SessionApplications.ContainsKey(sessionId))
        {
            SessionApplications.Remove(sessionId);
            SessionNextIds.Remove(sessionId);
        }
    }




 }

