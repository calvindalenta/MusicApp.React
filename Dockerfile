FROM mcr.microsoft.com/dotnet/aspnet:5.0

WORKDIR /app

COPY production .

# ENV ASPNETCORE_URLS=http://+:8080
# EXPOSE $PORT
EXPOSE 8080

CMD ["dotnet", "MusicApp.Api.dll"]
