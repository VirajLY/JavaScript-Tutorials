
# Unique Id

This component takes a string as an argument for prefix and assigns an unique id to the elements.

## Logic 
#### If prefix is given : 
UniqueId = prefix + "-" + Math.random().toString(36).substring(2)


#### If prefix is not given : 
UniqueId = Math.random().toString(36).substring(2)