$Directory = "F:\Dev\PerfectEye\public\assets\" # Where all the maps are
$OutLocation = "F:\Dev\PerfectEye\src\data\"
$Json = @()

$Games = Get-ChildItem -Path $Directory -Directory | Where-Object { $_.Name -ne "Skyboxes" }

foreach ($Game in $Games) {
    $Root = [PSCustomObject]@{
        label = $Game.Name
        links = @()
    }

    $Maps = Get-ChildItem -Path $Game.FullName -Directory

    foreach ($Map in $Maps) {
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
    }

    $Json += $Root
}

$Json | ConvertTo-Json -Depth 100 | Out-File -Path ($Outlocation + "Content.json")