using ApplicationTracker.Models;
using ApplicationTracker.Services;
using Microsoft.AspNetCore.Mvc;

namespace ContosoPizza.Controllers;

[ApiController]
[Route("[controller]")]
public class ApplicationController : ControllerBase
{
    public ApplicationController()
    {
    }

[HttpGet]
public ActionResult<List<Application>> GetAll() =>
    ApplicationService.GetAll();

[HttpGet("{id}")]
public ActionResult<Application> Get(int id)
{
    var application = ApplicationService.Get(id);

        if(application == null)
            return NotFound();
        
        return application;
}

[HttpPost]
public IActionResult Create(Application application)
{            
    ApplicationService.Add(application);
    return CreatedAtAction(nameof(Get), new { id = application.Id }, application);
}
 
 
[HttpPut("{id}")]
public IActionResult Update(int id, Application application)
{
    if (id != application.Id)
        return BadRequest();
           
    var existingPizza = ApplicationService.Get(id);
    if(existingPizza is null)
        return NotFound();
   
    ApplicationService.Update(application);           
   
    return NoContent();
}

[HttpDelete("{id}")]
public IActionResult Delete(int id)
{
    var pizza = ApplicationService.Get(id);
   
    if (pizza is null)
        return NotFound();
       
    ApplicationService.Delete(id);
   
    return NoContent();
}

}