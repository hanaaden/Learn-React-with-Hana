# tables vs schema

table represents actual data like its primary storage 
it records rows and columns and the most important 
part is the table is structured

means for example rows records different costumers 
while columns(fields ) records the attributes 
like the ID the age of custumer 

while the schema is bluePrint of the DM 
its not record specific it just records the 
entire system databas blueprints include 
tables 

### the main point 
tables focus individual data entities and attributes 
while schema is entire framework of databases structure 

###  Examples

table = Customers table, Orders table.
schema = Database schema for an e-commerce system encompassing multiple tables and their relationships

# YAML
YAML is like a neat way to store settings or data, kind of like JSON, but easier for humans to read.

YAML is a human-readable data serialization language that is often used for writing configuration files

YAML files use a .yml or .yaml extension, and follow specific syntax rules. 

YAML has features that come from Perl, C, XML, HTML, and other programming languages. YAML is also a superset of JSON, so JSON files are valid in YAML.
There are no usual format symbols, such as braces, square brackets, closing tags, or quotation marks. And YAML files are simpler to read as they use Python-style indentation to determine the structure and indicate nesting.

```
#Comment: This is a supermarket list using YAML
#Note that - character represents the list
---
food: 
  - vegetables: tomatoes #first list item
  - fruits: #second list item
      citrics: oranges 
      tropical: bananas
      nuts: peanuts
      sweets: raisins

```

Where it’s used:

	•	GitHub Actions workflows

	•	Docker Compose files

	•	Kubernetes configuration

	•	CI/CD pipelines

	•	Application settings (like config.yaml)





