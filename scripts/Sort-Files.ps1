# This script takes all the .glb files that have been dumped into a Game's folder, makes a folder for each file and then moves them into place.

# Specify the path to your folder containing the .glb files
$sourceFolder = "F:\Dev\PerfectEye\public\assets\Games\Counter Strike"

# Get all .glb files in the specified folder
$glbFiles = Get-ChildItem -Path $sourceFolder -Filter *.glb

# Loop through each .glb file
foreach ($file in $glbFiles) {
    # Create a folder name based on the file name (without extension)
    $folderName = [System.IO.Path]::Combine($sourceFolder, $file.BaseName)

    # Create the folder if it doesn't already exist
    if (!(Test-Path -Path $folderName)) {
        New-Item -ItemType Directory -Path $folderName
    }

    # Move the .glb file into the newly created folder
    Move-Item -Path $file.FullName -Destination $folderName
}
