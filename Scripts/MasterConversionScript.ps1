#region Variables
#####################################################
# Variables
#####################################################
$Global:Blender42Path = "F:\SteamLibrary\steamapps\common\Blender\"
$Global:Blender40Path = "C:\Program Files\Blender Foundation\Blender 4.0\"

$Global:RootFolder = "D:\Blender\Input"
$Global:OutputFolder = "F:\Dev\GoldenDarkMaps\public\assets"

$Global:LogDir = "D:\Blender\Logs\"
#endregion

#region Functions
#####################################################
# Functions
#####################################################
function Convert-Objs40 {
    param (
        [string]$InputPath,
        [string]$OutputPath
    )

    $Folder = Split-Path $InputPath -Leaf
    $Output = "$OutputFolder\$Folder"
    & "$Global:Blender42Path\blender.exe" --background --python script.py -- $InputPath $Output 2>&1 | Tee-Object -FilePath "$Global:LogDir\$Folder.log"
}
#endregion

#region Script
#####################################################
# Script
#####################################################
$Folders = Get-ChildItem -Path $RootFolder -Directory

foreach ($Dir in $Folders) {
    Write-Host "-----$($Dir.Name)-----" -ForegroundColor Magenta
    Convert-Objs40 -InputPath $Dir.FullName -OutputPath "$OutputFolder\$($Dir.Name)"
    $Files = Get-ChildItem -Path "$OutputFolder\$($Dir.Name)"
    $Files.Name | Where-Object { $_ -ne "Content.txt" } | Out-File -FilePath "$OutputFolder\$($Dir.Name)\Content.txt"
}

Write-Host "Complete!" -ForegroundColor Green
#endregion