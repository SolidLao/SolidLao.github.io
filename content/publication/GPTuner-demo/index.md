---
title: 'A Demonstration of GPTuner: A GPT-Based Manual-Reading Database Tuning System'

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - admin
  - Yibo Wang
  - Yufei Li
  - Jianping Wang
  - Yunjia Zhang
  - Zhiyuan Chen
  - Wanghu Chen
  - Yuanchun Zhou
  - Mingjie Tang
  - Jianguo Wang

# Author notes (optional)
# author_notes:
#   - 'Equal contribution'
#   - 'Equal contribution'

date: '2024'
doi: 'https://doi.org/10.48550/arXiv.2311.03157'

# Schedule page publish date (NOT publication's date).
publishDate: '2024'

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ['paper-conference-demo']

# Publication name and optional abbreviated publication name.
publication: In *Proceedings of ACM Conference on Management of Data (SIGMOD)*
publication_short: Proceedings of ACM Conference on Management of Data (SIGMOD)

abstract: Selecting appropriate values for the configurable knobs of Database Management Systems (DBMS) is crucial to improve performance. But because such complexity has surpassed the abilities of even the best human experts, database community turns to machine learning (ML)-based automatic tuning systems. However, these systems still incur significant tuning costs or only yield sub-optimal performance, attributable to their overly high reliance on black-box optimization and an oversight of domain knowledge. This paper demonstrates GPTuner, a manual-reading database tuning system that leverages Large Language Model (LLM) to bridge the gap between black-box optimization and white-box domain knowledge. This demonstration empowers (1) regular users with limited tuning experience to gain qualitative insights on the features of knobs, and optimize their DBMS performance automatically and efficiently, (2) database administrators and experts to further enhance GPTuner by simply contributing their invaluable tuning suggestions in natural language. Finally, we offer visitors the opportunity to explore a range of DBMS and optimization metrics, coupled with the flexibility to tailor their target workloads to their specific needs.

# Summary. An optional shortened abstract.
# summary: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere tellus ac convallis placerat. Proin tincidunt magna sed ex sollicitudin condimentum.

tags: ["Database Tuning", "Large Language Model", "Bayesian Optimization", "Demonstration"]

# Display this page in the Featured widget?
featured: false

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: 'https://arxiv.org/abs/2311.03157'
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
{{% /callout %}}

Add the publication's **full text** or **supplementary notes** here. You can use rich formatting such as including [code, math, and images](https://docs.hugoblox.com/content/writing-markdown-latex/). -->
