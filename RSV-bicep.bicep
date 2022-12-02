// Define the parameters for the deployment
param resourceGroupName string
param location string
param vaultName string

// Define the resource group for the Recovery Services vault
resource group 'rg' = {
  name: resourceGroupName
  location: location
}

// Define the Recovery Services vault
resource vault 'vault' = {
  name: vaultName
  resourceGroupName: resourceGroupName
  location: location
  sku: 'Standard'
}

// Export the resource group and Recovery Services vault names
output resourceGroupName string = resourceGroupName
output vaultName string = vaultName
