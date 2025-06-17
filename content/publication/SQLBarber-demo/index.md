---
title: "Demonstrating SQLBarber: Leveraging Large Language Models to Generate Customized and Realistic SQL Workloads"

authors:
  - admin
  - Immanuel Trummer

date: "2025"
publishDate: "2025"
doi: "https://dl.acm.org/doi/10.1145/3722212.3725101"

publication_types: ["paper-conference-demo"]
publication: "In *Proceedings of ACM Conference on Management of Data (SIGMOD)*"
publication_short: "Proceedings of ACM Conference on Management of Data (SIGMOD)"

abstract: |
  Database research and development require a large volume of SQL queries for benchmarking. However, it is difficult to obtain real SQL queries due to privacy issues, and existing SQL generation methods are limited in customization and satisfying realistic constraints. To address this problem, we propose SQLBarber, a novel system leveraging Large Language Models (LLMs) to generate customized and realistic SQL workloads. SQLBarber (a) eliminates the need for users to manually craft SQL templates in advance, while providing the flexibility to accept high-level natural-language specifications to constrain the SQL templates, (b) scales efficiently to produce a large number of queries satisfying any user-defined cost distribution (e.g., cardinality, execution-plan cost, or execution time), and (c) analyzes execution statistics obtained from Amazon Redshift and Snowflake to derive both the specifications for SQL templates and the cost distribution of SQL queries, ensuring that these constraints reflect real-world workloads. This demonstration allows the audience to experience SQLBarber in action: (1) provide their customized specifications on SQL templates, (2) gain insights on the effect of SQL template and predicate values on SQL costs, and (3) explore real-world specifications of templates as well as cost distributions of queries, and constrain their SQL queries to a desired specification and distribution, with the flexibility to try out different LLM and SQL cost types.

tags:
  - SQL Generation
  - Large Language Model
  - Database Benchmarking
  - Demonstration

featured: false

url_pdf: "https://dl.acm.org/doi/10.1145/3722212.3725101"
url_video: "https://youtu.be/qOuAKVXXcdM"

image:
  caption: "SQLBarber"
  focal_point: ""
  preview_only: false
---
