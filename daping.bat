@echo off
chcp 65001
echo Starting Express Server 1...
start cmd /k "cd 大屏\charts\ && node daping.js"

echo Starting Express Server 2...
start cmd /k "cd 大屏\charts\ && npm start"

echo Starting Express Server 3...
start cmd /k "cd 大屏\remote\ && npm start"
pause