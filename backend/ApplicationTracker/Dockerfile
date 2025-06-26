FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /app

# Copy project files from the correct path
COPY backend/ApplicationTracker/ .

# Restore and build
RUN dotnet restore "ApplicationTracker.csproj"
RUN dotnet publish "ApplicationTracker.csproj" -c Release -o out

# Runtime image
FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /app
COPY --from=build /app/out .
ENTRYPOINT ["dotnet", "ApplicationTracker.dll"]