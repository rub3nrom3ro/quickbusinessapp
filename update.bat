@echo off
setlocal EnableExtensions DisableDelayedExpansion

cd /d "C:\Users\rub3n\source\proyectos\QuickBusinessApp" || exit /b 1

if "%~1"=="" (
  set "MSG=Update site"
) else (
  set "MSG=%~1"
)

git add .
git diff --cached --quiet
if not errorlevel 1 (
  echo No hay cambios para subir.
  exit /b 0
)

git commit -m "%MSG%"
git push

endlocal