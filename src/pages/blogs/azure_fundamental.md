---
title: "Azure Fundamental for AZ-900"
date: "2021-03-22"
featuredImage: "../../images/blog_images/az_900.png"
---

## Modules
1. Cloud Concepts (20-25%)
2. Core Azure Services (15-20%)
3. Core Solutions and managment tools (10-15%)
4. General Security and network security (10-15%)
5. Identity, Governanace, privacy, and compliance (20-25%)
6. Azure cost management and Service Level Agreements (10-15%)

## Module 1: Core Services
1. **Regions** are made up of one or more datacenters in close proximity. Provide flexibility and scale to reduce customer latency. Preserve data residency with a comprehensive compliance offering.
2. **Region Pairs** are two regions paired-up. They should be at least 300 miles apart. They are automatically replicated for some services. Prioritized region recoery in the event of outage. Updates are rolledout sequentially to minimize downtime. [Ref: 1][1]
3. **Availability Zones** provide protection against downtime due to datacenter failure. Physicaly separate datacenters within the same region.
4. **Compute Services:**
	1. **Virtual Machine** emulation of actual computer.
	2. **Virtual Machine Scale Sets** set of VMs supports auto-scaling, pre-provisioning. Can use templates.
	3. **Azure Kubernetes Service (AKS)** deploy and manage containers
	4. **App Services** can be used to deploy web, mobile, API apps. This is a PaaS
	5. **Function App** run only the code
	6. **Disks**
5. **Resource Groups** container to manage and aggregate resources in a signle unit; resources can exist in only one RG; resources can exist in differnet regions; resources can be moved to different RG; applications can use multiple RG
6. **Azure Resource Manager** management layer that enables create, update, delete resources; controlled through Azure Portal, Azure PowerShell, Azure CLI, REST Clients and SKDs
7. **Azure Subscriptions** provides authenticated and authorized access to Azure accounts.
	* **Billing Boundary** generate separate biling reports and invoices
	* **Access Control Boundary** manage and control access to the resources that users can provision with specific subscription.
8. **Management Groups:** Can contain multiple Azure Subscriptions; subscriptions inherit conditions applied to the management group; 10k Management groups in a single directory; Can support upto six levels of depth (MG -> Subscriptions -> RG -> Resources)

## Module 2: Core Azure Workloads
1. **Virtual Machines** includes virtual processor, memory, storage, network. IaaS that provides total control and customization
2. **Azure Container Services:** light weight, virtualized environment; doesn't need OS manamagement;
	1. **Azure Container Instances:** PaaS offering that runs on a container without VM
	2. **Azure Kubernetes Service:** orchestration service for containers with distributed architecture and large volumes of containers
3. **Windows Virtual Desktop:** desktop and app virtualization that runs in cloud; no need for additional gateway servers; publish unlimited host pools to accomodate diverse workloads; reduce costs with pooled, multi-session resources;
4. **Azure Networking Services**
	1. **Azure Virtual Network (VNet):** enables communication with each other, over internet and on-premises networks
	2. **Virtual Private Network Gateway (VPN):** send encrypted traffic between virtual network and an on-premise location over public network (**IPSec IKE Site-to-Site VPN**)
	3. **Azure Express Route:** extends on-premises networks into Azure over private connection facilitated by a connectivity provider; reliable, low-latency; less throughput; Connectivity models[Ref 2][2]:
		* CloudExchange Co-location: hosting private hosting
		* Point-to-Point Eternet Connection: office to azure
		* Any-to-any (IPVPN) Connection: connect WAN
5. **Azure Storage Services:**
	1. **Container Storage (Blob):** store massive amount of unstructured data (text/binary); Account -> Container -> Blob; in each blob, page/blocks can be stored;
		* **Page Blob** for disk image backup
		* **Block Blob** for movies, mp3
		* **Append Blob** for log files
	2. **Disk Storage:** disks for virtual machines, applications, and other services to access and use
		1. **Standard SSD:**
		2. **Premium SSD:** default; mission-critical;
		3. **HDD:**
	3. **Azure File Storage:** sets up highly available network file shares that can be accessed using Server Message Block (SMB) protocol
	4. **Azure Storage Explorer:** Application to work with storage services
	5. **Storage Access Tiers:**
		* Hot: accessed frequently
		* Cool: infrequent access; stored for at least 30 days
		* Achive: rarely used; at least 180 with flexible latency
	6. **Azure Storage Tables:** NoSQL datastore, structured, non-relational, schema-less; key-value lookups
	7. **Azure Storage Queue:** Message queue for communication between two resources; Account -> Queue -> Message
	8. Tools:
		* Azure Portal
		* Azure Storage Explorer
		* MS Visual Studio Cloud Explorer (doesn't support Files)
	9. **Azure Storage Architecture:**
		* Stream Layer: Distributed replication layer
		* Partition Layer: massive scale out and Auto load balancing index layer
		* Front End Layer: different types of storage
	10. Things to consider for Storage: who will use, what kind of data, how manay storage account, what is location, performance requirement, DR, Security billing, Budget constraint, automation, accidental delete, auditing, data diversity, partitioning data, cost of data, replicating data, hot/cold/archive
	11. Data Protection Options:
		* Turn on Soft delete
6. Azure Account types:
	1. General Purpose V2 (latest)
	2. General Purpose V1 (legacy)
	3. Blob Storage (block and append blobs)
7. Data Redundancy types [Ref 3][3]:
	1. **Locally-redundant Storage (LRS):** replicates 3 times within datacenter; synchronous writes to all three;
	2. **Zone Redundant Storage (ZRS):** replicates 3 times among zones; can be 2 or 3 availability zones;
	3. **Geo-redundant storage (GRS):** replicates data with LRS/ZRS and additional 3 copies in twinned Azure Region; updated asynchronously; not accessible unless storage account failsover; same SLA as LRS/ZRS;
	4. **Read-access geo-redundant storage (RA-GRS):** GRS with twinned copy being readable; read SLA increased to 99.99%; write SLA remains same;
	5. **Geo-zone-redundant Storage (GZRS):** ZRS + GRS; recommended for maximum consistency, durability, and availability, performance, and resilience for disaster recovery;
	6. **Read-access geo-zone-redundant storage(RA-GZRS):** ZRS + GRS with read access to twinned region
8. **Azure Database Services**
	1. **Azure Cosmos Database:** globally distributed database; elastically and independently scales; Atom Recorder Sequence (ARS) format;
	2. **Azure SQL Database:** relational Database-as-a-service(DaaS) based on latest Microsoft SQL Server; it is a PaaS; Azure Hybrid Benefit;
	3. **Azure Database for MySQL:** fully managed MySQL database
	4. **Azure Database for PostgreSQL:** database service based on Postgres database engine
	5. **Azure Database Migration Service:** generate report; recommend requirements for migration
9. **Azure Marketplace** allows customer to find, try, purchase, and provision applications and services from hundreds of certified providers. open-source container platforms, virtual machine and database images, application build and deployment software, and developer tools

## Module 3: Core Solutions
1. **Azure Internet of Things**
	1. **Azure IoT Central:** fully managed global IoT SaaS; easy to connect, monitor, and manage IoT assets
	2. **Azure IoT Hub:** managed service hosted in cloud that acts as central message hub for bi-directional communication between IoT applications and devices.
	3. **Azure Sphere:** secure, high-level application platform with built-in communication and security features; push updates and patches to device; also provide data log
2. **Big Data and analytics**
	1. **Azure Synapse Analytics:** cloud-based enterprise data warehouse; can use for business data and ML also;
	2. **Azure HDInsight:** fully-managed open-source analytics service; 
	3. **Azure Databrics:** build artificial solutions; python, scala, R, SQL
	4. **Azure Data Lake Analytics:** simplify big data; 
3. **Artificial Intelligence & Machine Learning**
	1. **Azure Machine Learning:** develop, train, and deploy ML models; development tools, languages, and frameworks
	2. **Cognitive Services:** enable apps to see, hear, speak, understand, and interpret user's need; build algorithms; apply AI to scenarios, computer vision;
	3. **Azure Bot Service:** develop intelligent, enterprise-grade bots; NLP
4. **Serverless Computing:**
	1. **Azure Functions:** event based code running services and not the underlying infrastructure
	2. **Azure Logic Apps:** Automate and orchestrate tasks, business processes, and workflows to integrate apps
5. **DevOps tools:**
	1. **Azure DevOps:** developement collaboration tools including pipelines, Kanban boards, and auto load testing
	2. **GitHub:** hosting with version control, source code management, and bug/task management
	3. **GitHub Actions for Azure:** automate software workflow to build, test, deploy
	4. **Azure DevTest Labs:** quickly create environments in Azure while minimizing waste and controlling cost
6. **Azure Management Tools**
	1. **Azure Resource Manager (ARM):**
		1. **Azure Portal:**
		2. **Azure PowerShell:**
		3. **Azure Mobile App:**
		4. **Azure CLI:**
		5. **Azure REST API:**
		6. **Azure Cloud Shell:**
	2. **Azure Advisor:** analyzes deployed Azure resources and makes recommendations based on best practices to optimze Azure deployments. Provides recomendations on Reliablity, Security, Performance, Cost, and Operational Excellence.
	3. **Azure Monitor:** maximizes availability and performance of applications and services by collecting, analyzing, and acting on telemetry from cloud and on-premise environements. Services provided: Application Insights, Log Analytics, Smart Alerts, Automation Actions, and Customized Dashboard
	4. **Azure Service Health:** evaluate impact of Azure service issues with personalized guidance and support, notifications, and issue resolution updates. Provide info regarding outages, maintenace, and other health advisories;
	5. **Azure Resource Manager (ARM) templates:** JSON files that can be used to create and deploy Azure infrastructure without having to write programming commands. Features: declarative syntax, repeatable results, orchestration, modular files, built-in validation, and exprotable code.

## Module 4: Security
1. **Azure Security Center:** monitoring service that provides threat protection across both Azure and on-premises datacenters; provides security recommendations; detect and block malware; analyze and identify protential attacks; just-in-time access control for ports; provide security score; capabilities:
	1. Policy Compliance: run policies across management groups, subscriptions or tenants
	2. Continuous Assessments: assess new and deployed resources to ensure that they are configured properly
	3. Tailored recommendations: recommendations based on existing workload with intructions on how to implement them
	4. Threat Protection: Analyze attemted threats through alerts and impacted resource reports
2. **Azure Sentinel:** security information management (SIEM) and security automated response (SOAR) solution that provides analytics and threat intelligence across an enterprise. Connectors and integrations: Office 365, Azure Active Directory, Azure Advanced Threat Protection, Microsoft Cloud App Security; collects data, detect previously uncovered threats and minimize false positives using analytics, investigate threat with AI, and respond to incidents with built-in orchestration and automation
3. **Azure Key Vault:** stores application secrets in centralized cloud location in order to securely control access permissions and access logging. Provides: Secrets management, key management, certificate management, storing secrets backed by hardware security modules (HSMs)
4. **Azure Dedicated Host:** provides physical servers that host one or more Azure virtual machines that is dedicated to a single organization's workload. Features: hardware isolation at server level, control over maintenance, aligned with Azure Hybrid Use Benefits
5. **Defense in Depth:** layered approach to securing system, multiple levels of protection; NSG + Azure Firewall; Perimeter layer (protects boundaries), Networking layer (with NSG)
6. **Shared Security:** migration from customer-controlled to cloud-based datacenters shifts the responsibilities for security; security becomes a shared concernt between provider and customer
7. **Network Security Groups (NSG):** filter network traffic to and from Azure resources on Azure Virtual Network. Features:
	* set inbound and outbound rules to filter by source and destination IP, port, protocol
	* add multiple rules within subscription limits
	* Azure applies baseline security rules to new NSGs
	* Override defaults with new higher priority rules
8. **Azure Firewall:** stateful, managed Firewall-as-a-Service (FaaS) that can grants/denies server access based on IP. Applies inbound and outbound rules, built-in high-availability, unrestricted scalability, uses Azure Monitor loggin
9. **Azure Application Gateway:** also provides a firewall, Web Application Firewall (WAF). WAF provides centralized, inbound protection for web applications.
10. **Azure Distributed Denial of Service (DDoS) protection:** sanitizes unwanted network traffic before impacts service availability; basic service tier is automatically enabled by Azure; standard service tier adds mitigation capabilities that are tuned to protect Azure virtual network resources;

## Module 5: Identity, Governance, Privacy and Compliance
1. **Azure Identity Services**
	1. **Authentication vs Authorization**
	2. **Azure Active Directory (AAD):** identity and access management service. Features: authentication, SSO, application management, B2B, B2C, device menagement; azure tenant is single organization;
	3. **Multi-Factor Authentication (MFA):** 2 or more things for authentication: something you know, something you possess, something you are
	4. **Single Sign-on (SSO):** 
	5. **Conditional Access:** bring signals together, to make decision, enforce organizational policies. Things considered: user/group membership, ip location, device, application, risk detection; 
2. **Azure governance features**
	1. **Role-based Access Control (RBAC):** fine-grain access management, segregate duties within the team, enables access to azure portal and controling access to resources
	2. **Resource locks:** protects resources from deletion or modification; manage locks at subscription, resource group or individual resource level; Two types:
		1. CanNotDelete
		2. ReadOnly
	3. **Tags:** provides metadata to resources; name-value pair; useful for rolling up billing information
	4. **Azure Policy:** helps enforce organizational standards and to assess compliance at-scale. evaluates and identifies resources that don't comply; provides built-in policy and initiative definitions, under categories such as storage, networking, compute, security center, and monitoring
	5. **Azure Blueprints:** rapidly build and stand up new environments. development teams can quickly build trust through organizational compliance with a set of built-in components (ie networking) in order to speed up development and delivery. Features: role assignment, policy assignment, ARM Templates, Resource Groups; backed by global Cosmo Database
	6. **Cloud Adoption Framework (CAF):** provides One microsoft approach to adop cloud; best practices from Microsoft employees, partners, and customers; provides tools, guidance, and narratives for strategies and outcomes. Components:
		1. Strategy: define business justification and expected outcome
		2. Plan: align actionable adoption plans to busienss outcomes
		3. Ready: prepare cloud for planned changes
		4. Migrate: migrate and modernize existing workload
		5. Innovate: develop new cloud-native or hybrid solutions
		6. Govern: govern the environment and workloads
		7. Manage: operations management for cloud and hybrid solutions
3. **Azure privacy and compliance:**
	1. **Core Tenants:**
		1. **Security**: secure by design; built-in intelligent security, helps protect against known and unknown cyberthreats using automation and AI
		2. **Privacy:** ensured through contractual agreements and by providing user control and transparency
		3. **Compliance:** respect local law and regulation; provide comprehensive coverage of compliance offerings; it provides most comprehensive set of compliance offerings, including: CJIS, HIPAA, CSA STart Certification, ISO/IEC 27018, EU Model Clauses, NIST
	2. **Privacy Statement:** provides opennes and honesty about how Microsoft handles user data collected from its products and services. It explains: what data Microsoft processes, how they process it, and what purpose the data is used for.
	3. **Online Services Terms (OST):** licensing terms define the terms and conditions for products and online services you purchase through **Microsoft Volume Licensing** programs.
	4. **Data Protection Amendment (DPA):** sets forth the obligations, with respect to the processing and security of customer data and personal data
	5. **Trust Center:** learn about security, privacy, compliance, policies, features, and practices; provides expert information, curated list of recommended resources, role-specific information for business managers, admins, and so on.
	6. **Compliance Documentation:** comprehensive set of compliance offerings to help organizations comply with national, regional, and industry specific requirements; 
	7. **Azure Sovereign Regions:** meets security and compliance needs of US government agencies and their solution providers. Features: seperate instance of Azure, physically isolated from non-US government deployments. Two types primarily: US and China

## Module 6: Azure Pricing and Lifecycle
1. Methods for managing costs;
	* Factors affecting costs:
		1. Resource type
		2. Services: enterprise/web direct/CSP
		3. Location
		4. Bandwidth
		5. Reserved Intances
		6. Azure Hybrid Use Benefit
	* **Pricing Calculator:** helps estimate the cost of Azure products. parameters can include: region, tier, billing options, support options, programs and offers, dev/test pricing
	* **Total Cost of Ownership (TCO) Calculator:** tool to estimate savings from migrating to Azure.
	* Options to reduce and control costs
		1. Perform cost analysis (Pricing/TCO)
		2. Monitor usage with Azure Advisor
		3. Use spending limits
		4. Use Azure Reservations and Azure Hybrid Benefit (HUB)
		5. Choose low-cost locations and regions
		6. Keep up-to-date with subscription offers
		7. Apply tags to identify cost owners
	* **Azure Cost Management:**
		1. Reporting: billing reports
		2. data enrichment: refine raw data
		3. Budgets: set spend budget
		4. alerting: when cost exceeds limits
		5. Recommendations
2. Service Level Agreements and Lifecycles
	* **Azure Service Level Agreements (SLA):** Microsoft's commitments for uptime and connectivity; based on individual products and services; free/preview services do not offer SLAs;
	* **Composite SLA:** combined SLA of many services
	* Factors affecting SLAs
		* Lower SLA:
			* Adding more services
			* choosing free or non-SLA services
		* Raise SLA:
			* Availability Zones
			* Redundant systems
	* **Azure Preview Program:** test beta apps/services and other pre-relase features, products, regions to provide feedback.
		1. **Public Preview:** any customer can evaluate
		2. **Generally Available (GA):** all customers can use and region availability will vary
	* Azure plans:
		1. Basic
		2. Developer
		3. Standard
		4. Professional Direct

[comment]: <> (References)
[1]: https://docs.microsoft.com/en-us/azure/best-practices-availability-paired-regions
[2]: https://docs.microsoft.com/en-us/azure/expressroute/expressroute-connectivity-models
[3]: https://docs.microsoft.com/en-us/azure/storage/common/storage-redundancy#geo-zone-redundant-storage