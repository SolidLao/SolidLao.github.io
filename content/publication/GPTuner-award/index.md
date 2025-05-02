---
title: 'GPTuner: An LLM-Based Database Tuning System'

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - admin
  - Yibo Wang
  - Yufei Li
  - Jianping Wang
  - Yunjia Zhang
  - Zhiyuan Cheng
  - Wanghu Chen
  - Mingjie Tang
  - Jianguo Wang

# Author notes (optional)
# author_notes:
#   - 'Equal contribution'
#   - 'Equal contribution'

date: '2025'
doi: '10.1145/3733620.3733641'

# Schedule page publish date (NOT publication's date).
publishDate: '2025'

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ['paper-conference']

# Publication name and optional abbreviated publication name.
publication: Proceedings of ACM Conference on Management of Data (SIGMOD), Selected as SIGMOD Research Highlight 2024
publication_short: Proceedings of ACM Conference on Management of Data (SIGMOD), 🏆 **SIGMOD Research Highlight Award 2024** 🏆

abstract: Selecting appropriate values for the configurable knobs of Database Management Systems (DBMS) is essential to improve performance. But because the complexity of this task has surpassed the abilities of even the best human experts, the database community turns to machine learning (ML)- based automatic tuning systems. However, these systems still incur significant tuning costs or only yield suboptimal performance, attributable to their overly high reliance on black-box optimization and the lack of integration with domain knowledge, such as DBMS manuals and forum discussions. Hence, we propose GPTuner, a manual-reading database tuning system that extensively leverages domain knowledge to automatically optimize the search space and enhance the runtime feedback-based optimization process. Firstly, we develop a Large Language Model (LLM)-based pipeline to collect and refine heterogeneous knowledge, and propose a prompt ensemble algorithm to unify a structured view of the refined knowledge. Secondly, using the structured knowledge, we (1) design a workload-aware, trainingfree knob selection strategy, (2) develop a search space optimization technique considering the value range of each knob, (3) propose a Coarse-to-Fine Bayesian Optimization Framework to explore the optimized space. Finally, we evaluate GPTuner under different benchmarks (TPC-C and TPC-H), metrics (throughput and latency) and DBMS (PostgreSQL and MySQL). Compared to state-of-the-art methods, GPTuner identifies better configurations in 16x less time on average. Moreover, GPTuner achieves up to 30% performance improvement over the best-performing alternative.

# Summary. An optional shortened abstract.
# summary: test **test** <strong style="color:red;">SIGMOD Research Highilight Award 2025!</strong>

tags: ["Database Tuning", "Large Language Model", "Bayesian Optimization"]

# Display this page in the Featured widget?
featured: true

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: 'https://doi.org/10.1145/3733620.3733641'
url_code: 'https://github.com/SolidLao/GPTuner'
# url_dataset: ''
# url_poster: ''
# url_project: ''
# url_slides: ''
# url_source: ''
url_video: 'https://www.youtube.com/watch?v=Hz5Zck-9TlA&feature=youtu.be'

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
image:
  caption: 'GPTuner'
  focal_point: ''
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
# projects:
#   - example

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
# slides: example
---

<!-- {{% callout note %}}
Click the _Cite_ button above to demo the feature to enable visitors to import publication metadata into their reference management software.
{{% /callout %}}

{{% callout note %}}
Create your slides in Markdown - click the _Slides_ button to check out the example.
{{% /callout %}} -->

<!-- Add the publication's **full text** or **supplementary notes** here. You can use rich formatting such as including [code, math, and images](https://docs.hugoblox.com/content/writing-markdown-latex/). -->
