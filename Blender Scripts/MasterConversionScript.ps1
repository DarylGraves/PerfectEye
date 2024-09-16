#####################################################
# Variables
#####################################################
$Global:BlenderPath = "F:\SteamLibrary\steamapps\common\Blender\"
$Global:InputFolder = "D:\Blender\Input"
$Global:OutputFolder = "F:\Dev\GoldenDarkMaps\public\assets"
$Global:LogDir = "D:\Blender\Logs\"

#####################################################
# Functions
#####################################################
function Convert-Objs {
    param (
        [string]$InputPath,
        [string]$OutputPath
    )

    $Folder = Split-Path $InputPath -Leaf
    $Output = "$OutputFolder\$Folder"
    & "$Global:BlenderPath\blender.exe" --background --python BlenderConversionScript.py -- $InputPath $Output 2>&1 | Tee-Object -FilePath "$Global:LogDir\$Folder.log"
}

#####################################################
# Script
#####################################################
$Folders = Get-ChildItem -Path $InputFolder -Directory

foreach ($Dir in $Folders) {
    Write-Host "-----$($Dir.Name)-----" -ForegroundColor Magenta
    Convert-Objs -InputPath $Dir.FullName -OutputPath "$OutputFolder\$($Dir.Name)"
    $Files = Get-ChildItem -Path "$OutputFolder\$($Dir.Name)"
    $Files.Name | Where-Object { $_ -ne "Content.txt" } | Out-File -FilePath "$OutputFolder\$($Dir.Name)\Content.txt"
}

Write-Host "Complete!" -ForegroundColor Green