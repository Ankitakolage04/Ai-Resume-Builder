# AI Resume Builder - Startup Script

Write-Host "Starting AI Resume Builder..." -ForegroundColor Green

# Start Backend in a new window
Write-Host "Starting Backend (Java JAR)..." -ForegroundColor Cyan
Start-Process powershell -ArgumentList "cd 'resume-ai-backend'; java -jar target\resume-ai-backend-0.0.1-SNAPSHOT.jar"

# Start Frontend in a new window
Write-Host "Starting Frontend (Vite)..." -ForegroundColor Cyan
Start-Process powershell -ArgumentList "cd 'resume_frontend'; npm run dev"

Write-Host "Services started!" -ForegroundColor Green
Write-Host "Backend: http://localhost:8080"
Write-Host "Frontend: http://localhost:5173"
Write-Host "Press any key to exit this launcher..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
