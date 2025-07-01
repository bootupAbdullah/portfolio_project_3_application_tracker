using ApplicationTracker.Models;
using ApplicationTracker.Services;
using Microsoft.AspNetCore.Mvc;

namespace ApplicationTracker.Controllers;

[ApiController]
[Route("[controller]")]
public class ApplicationController : ControllerBase
{
    public ApplicationController()
    {
    }


    //Helper method to get or create session ID
    private string GetSessionId()
    {
        var sessionId = HttpContext.Session.GetString("SessionId");
        if (string.IsNullOrEmpty(sessionId))
        {
            sessionId = Guid.NewGuid().ToString();
            HttpContext.Session.SetString("SessionId", sessionId);
        }
        return sessionId;
    }

    [HttpGet]
    public ActionResult<List<Application>> GetAll()
    {
        var sessionId = GetSessionId();
        return ApplicationService.GetAll(sessionId);
    }


    [HttpGet("{id}")]
    public ActionResult<Application> Get(int id)
    {
        var sessionId = GetSessionId();
        var application = ApplicationService.Get(id, sessionId);

        if (application == null)
            return NotFound();

        return application;
    }

    [HttpPost]
    public IActionResult Create(Application application)
    {
        var sessionId = GetSessionId();
        ApplicationService.Add(application, sessionId);
        return CreatedAtAction(nameof(Get), new { id = application.Id }, application);
    }


    [HttpPut("{id}")]
    public IActionResult Update(int id, Application application)
    {
        if (id != application.Id)
            return BadRequest();

        var sessionId = GetSessionId();
        var existingApplication = ApplicationService.Get(id, sessionId);
        if (existingApplication is null)
            return NotFound();

        ApplicationService.Update(application, sessionId);
        return NoContent();
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        var sessionId = GetSessionId();
        var application = ApplicationService.Get(id, sessionId);

        if (application is null)
            return NotFound();

        ApplicationService.Delete(id, sessionId);

        return NoContent();
    }

    // Reset endpoint for demo
    [HttpDelete("reset")]
    public IActionResult Reset()
    {
        var sessionId = GetSessionId();
        ApplicationService.ResetAll(sessionId);
        return Ok(new { message = "Session data reset sucessfully" });
    }

}

