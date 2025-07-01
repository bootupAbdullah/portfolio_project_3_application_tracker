var  MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
                      policy  =>
                      {
                          policy.WithOrigins("https://application-tracker-dash.netlify.app",
                          "http://localhost:5173")
                          .AllowAnyHeader()
                          .AllowAnyMethod()
                          .AllowCredentials();
                      });
});

// SESSION SUPPORT
builder.Services.AddDistributedMemoryCache(); // memory based session
builder.Services.AddSession(options =>
{
    options.IdleTimeout = TimeSpan.FromHours(2); // Session expires after 2 hours
    options.Cookie.HttpOnly = true; // Security: prevents JS access
    options.Cookie.IsEssential = true; // Required for GDPR compliance
    options.Cookie.SameSite = SameSiteMode.None; // cross-origin requests
    options.Cookie.SecurePolicy = CookieSecurePolicy.Always; // HTTPS only
});

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}


app.UseCors(MyAllowSpecificOrigins);

// Add session-based implementation here. 
// Important: place after CORS middleware, but before authentication middleware.
app.UseSession(); 

app.UseAuthorization();

app.MapControllers();

app.Run();
