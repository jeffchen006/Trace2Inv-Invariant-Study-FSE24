#!/bin/bash

# Path to the folder containing the .git directory you want to remove
FOLDER_PATH="./"

# Check if the .git directory exists
if [ -d "$FOLDER_PATH/.git" ]; then
    # Remove the .git directory
    rm -rf "$FOLDER_PATH/.git"
    echo ".git directory removed from $FOLDER_PATH"
else
    echo "No .git directory found in $FOLDER_PATH"
fi
