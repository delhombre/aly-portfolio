@echo off
pushd %~dp0
setlocal EnableDelayedExpansion

set Num=1
for /r %%i in (*.jpg) do (
    ren "%%i" "!Num!.jpg"
    set /a Num+=1
)