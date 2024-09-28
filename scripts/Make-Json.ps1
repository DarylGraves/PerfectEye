# TODO: Refactor this script - Could be a lot cleaner if we used functions


########################################################################################
#   Variables
########################################################################################
$Directory = "F:\Dev\PerfectEye\public\assets\" # Where all the maps are
$OutLocation = "F:\Dev\PerfectEye\src\data\"
$Json = @()

# Spiro names the folders differently to the website so these need to be renamed
$FolderNames = @{
    DKR   = "Diddy Kong Racing"
    GE007 = "GoldenEye"
    JFG   = "Jet Force Gemini"
    PD    = "Perfect Dark"
    SSB   = "Super Smash Brothers"
}

########################################################################################
#   Script
########################################################################################
Write-Host "Getting Game folders..." -ForegroundColor Green
$Games = Get-ChildItem -Path $Directory -Directory | Where-Object { $_.Name -ne "Skyboxes" }

# Rename folders if they're named differently
$FoldersChanges = $false

foreach ($folder in $Games) {
    if ($FolderNames.Keys -contains $folder.Name) {
        $ExistingFolderPath = $Directory + $FolderNames[$folder.Name]
        
        # Delete previous versions
        if (Test-Path $ExistingFolderPath) {
            Write-Host "`tConflict Found! Removing existing folder $ExistingFolderPath" -ForegroundColor Yellow
            Remove-Item $ExistingFolderPath -Recurse
        }

        Write-Host "`tRenaming $($folder.FullName) to $($FolderNames[$folder.Name])" -ForegroundColor Yellow
        Move-Item -Path $folder.FullName -Destination ($Directory + $FolderNames[$folder.Name])
        $FoldersChanges = $true
    }

}

if ($FoldersChanges) {
    Write-Host "Getting Game folders again..." -ForegroundColor Green
    $Games = Get-ChildItem -Path $Directory -Directory | Where-Object { $_.Name -ne "Skyboxes" }

}

# Rebuild the Json with new files

if (Test-Path -Path ($Outlocation + "Content.json")) {
    Write-Host "Existing content.json folder found - retrieving data and renaming to Content_OLD.json" -ForegroundColor Yellow
    $PreviousContent = Get-Content -Path ($Outlocation + "Content.json") | ConvertFrom-Json
    Move-Item -Path ($Outlocation + "Content.json") -Destination ($Outlocation + "Content_OLD.json") -Force
}

foreach ($Game in $Games) {
    Write-Host "`n----------------------------------------$($Game.Name)----------------------------------------`n" -ForegroundColor Magenta

    $Root = [PSCustomObject]@{
        label = $Game.Name
        links = @()
    }

    $GameMaps = Get-ChildItem -Path $Game.FullName -Directory

    if ($PreviousContent) {
        $PreviousContentGame = $PreviousContent | Where-Object { $_.label -eq $Game.Name }
    }

    foreach ($Map in $GameMaps) {
        $MapOutput = "{0,-25}" -f $Map.Name
        Write-Host "$MapOutput" -ForegroundColor DarkBlue -NoNewLine

        $ExistingData = $null
        if ($PreviousContentGame) {
            $ExistingData = $PreviousContentGame.links | Where-Object { $_.label -eq $Map.Name }
        }

        if ($null -eq $ExistingData) {
            Write-Host "`t`tNo previous data for $($Map.Name), creating new entry" -ForegroundColor Yellow
            $Root.Links += [PSCustomObject]@{
                label     = $Map.Name
                path      = "/" + $Game.Name + "/" + $Map.Name
                renderer  = "ThreeJs"
                speed     = 25
                skybox    = "blue.png"
                startPosX = 0
                startPosY = 0
                startPosZ = 0
                startRotX = 0
                startRotY = 0
                startRotZ = 0
            }

            continue
        }

        Write-Host "`t`tPrevious data found for $($Map.Name), adding to links" -ForegroundColor Green
        $Root.Links += [PSCustomObject]@{
            label     = $ExistingData.label
            path      = $ExistingData.Path
            renderer  = $ExistingData.renderer
            speed     = $ExistingData.speed
            skybox    = $ExistingData.skybox
            startPosX = $ExistingData.startPosX 
            startPosY = $ExistingData.startPosY 
            startPosZ = $ExistingData.startPosZ 
            startRotX = $ExistingData.startRotX 
            startRotY = $ExistingData.startRotY
            startRotZ = $ExistingData.startRotZ
        }

    }

    $Json += $Root
}

Write-Host "`nDone!" -ForegroundColor Green

$Json | ConvertTo-Json -Depth 100 | Out-File -Path ($Outlocation + "Content.json")