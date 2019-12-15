#### *ALL*
- id: number
- owner: User
- createDate: Date
- modifiedDate: Date
- checkedOut: Datetime
- isActive: boolean
- isDeleted: boolean

----
### System

#### User
  - id: number
  - uuid: string;
  - username: string
  - email: string
  - email_secondary: string
  - roles: Role[]
  - password: string|undefined;
  - passwordHash: string|undefined;

#### UserProfile
  - id: number
  - avatar: Image

#### Role
  - id: number
  - name: string
  - actions: Action[]

#### Groups
  - id: number
  - name: string
  -

#### Tag
  - id: number
  - name: string

#### Log
  - id: number
  - action: Action

#### Action
An action like editing data or saving data which has levels of security
  - id: number
  - name: string
  - description: string

#### Trigger
  - id: number
  - name: string
  - onAction: Action
  - category: TriggerCategory

#### TriggerCategory
  - id: numbr
  - name: string
  - triggers: Trigger

#### Workflow
  - id: number
  - name: string
  - description: string
  - actions: Action[]
  - triggers: Trigger[]
  - tree:

#### Query
  - id: number

#### Review

#### Dashboard


----
### Document Management

#### File
  - id: number
  - name: string
  -

#### Image
  - id: number
  - name: string
  - alt: string
  - shared: User[]
  - tags: Tag[]
  - contacts: Contact[]

#### Video
  - id: number
  - name: string
  - alt: string
  - tags: Tag[]
  - contacts: Contact[]

#### Proposal
  - id: number;
  - customer: Customer;
  - contacts: Contact[];

#### Document
  - id: number;
  - type: number;
  - company: Company;
  - proposal: Proposal;
  - contacts: Contact[];
  - actions: Action[]
  -

#### Share
  - id: number
  - item: Image || Video || Proposal || Document
  - action: Action[]
  -

----
### Accounting

#### Account
  - id: number
  - name: string
  - opened: date
  - closed: date
  - customer: Customer
  - expenses: Expense[]

#### Expense
  - id: number
  - bankText: string
  - description: string
  - amount: number
  - category: ExpenseCategory[]
  - project: Project
  - account: Account

#### ExpenseCategory
  - id: number
  - name: string
  - isTaxable: boolean
  - tax: number

#### Product

#### ProductCategory

#### Service

#### ServiceCategory

#### Estimate
  - id: number
  - items: Item[]
  - services: Service[]
  - products: Product[]

#### EstimateTemplate

#### Item
  - id: number
  - name: string
  - description: string
  - price: number
  - type: Category

#### ItemCategory

#### Invoice
  - id: number
  - content: string
  - worklogs: Worklog[]
  - expenses: Expense[]
  - items: Item[]
  - services: Service[]
  - products: Product[]
  - customer: Customer

#### InvoiceTemplate

#### Payment

#### PaymentCategory

#### Vendor

#### Bill

#### BillPayment

#### Purchase

#### PurchaseOrder

#### PurchaseCategory

#### Refund

#### Discounts


----
### Customer Relations Management (CRM)
#### Contact
  - id: number;
  - first_name: string;
  - last_name: string;
  - prefix: string;
  - contact_type: ;
  - job_title: string;
  - phone: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
  - email: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
  - website: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
  - social: {
    github: string;
    gitlab: string;
    bitbucket: string;
    linkedin: string;
  };
  - address_street: string;
  - address_city: string;
  - address_state: string;
  - address_zip: string;
  - proposals: Proposal[]
  - customers: Customer[]

#### Company
  - id: number
  - name: string
  - name_short: string
  - relationshipType: Prospect || Lead || Customer
  - phone: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
  - email: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
  - website: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
  - social: {
    github: string;
    gitlab: string;
    bitbucket: string;
    linkedin: string;
  };
  - address_street: string
  - address_city: string
  - address_state: string
  - address_zip: string
  - business_type: string
  - business_type_state: string
  - products_services: string
  - proposals: Proposal[]
  - contacts: Contact[]

#### Prospect
  - id: number
  - Company: Company

#### Lead
  - id: number
  - Company: Company

#### Customer
  - id: number
  - Company: Company


#### ActivityLog
  - id: number
  - type: phone || email || video || in-person
  - isAppointment
  - leftMessage
  - speakTo: {
    advisor: "john goffin"
    assistant: "sheryl thompson"
  }
  - created: datetime
  - owner: Employee || Contractor
  - subject: string
  - notes: string
  - firms: Firm[]
  - companies
  - follow task
  - phone numbers
  - email addresses
  - socialmedia

----
### Financial Advisors

#### FinancialAdvisor
  - id: number
  - crd: number
  - contact: Contact
  - firms: Firm[]
  - dbas: DoingBusinessAs[]

#### DoingBusinessAs
  - id: number
  - name: string

#### Firm
  - id: number
  - name: string
  - type: RIA &&|| BrokerDealer

#### BrokerDealer
  - id: number

#### RegisteredInvestmentAdvisor
  - id: number

#### Insurer
  - id: number

#### Insuree
  - id: number

----
### Human Resources (HR)

#### Organization
  - id: number
  - name: string
  - blueprint: OrganizationBlueprint
  - jobs: Job[]
  - teams: Team[]

#### OrganizationBlueprint
  - id: number
  - name: string
  - jobs: Job[]
  - teams: Team[]

#### Employee
  - id: number;
  - first_name: string;
  - last_name: string;
  - prefix: string;
  - phone: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
  - email: {
    primary: string;
    secondary: string;
    tertiary: string;
  };

  - website: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
  - social: {
    github: string;
    gitlab: string;
    bitbucket: string;
    linkedin: string;
  };
  - address_street: string;
  - address_city: string;
  - address_state: string;
  - address_zip: string;
  - hireDate: date
  - salary: number
  - commission: Commission;
  - manager: Manager;

#### Contractor
  - id: number;
  - first_name: string;
  - last_name: string;
  - prefix: string;
  - phone: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
  - email: {
    primary: string;
    secondary: string;
    tertiary: string;
  };

  - website: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
  - social: {
    github: string;
    gitlab: string;
    bitbucket: string;
    linkedin: string;
  };
  - address_street: string;
  - address_city: string;
  - address_state: string;
  - address_zip: string;
  - hireDate: date
  - rate: number
  - rateInterval: number # hourly, weekly, monthly
  - commission: Commission;
  - manager: Manager;

#### Manager
  - id: number
  - title: string
  - department: Department
  - employee: Employee
  - contractor: Contractor
  - startDate: date
  - endDate: date

#### Team
  - id: number
  - name: string
  - description: string
  - department: Department
  - links: {
    github: string
    gitlab: string
    jira: string
    confluence: string
    trello: string
    asana: string
  }
  - employees: Employee[]
  - contractors: Contractor[]
  - lead: Contractor || Employee

#### Job
  - id: number
  - title: string
  - salaryMin: number
  - salaryMax: number

#### JobHistory
  - id: number
  - employee: Employee;
  - startDate: date
  - endDate: date
  - job: Job
  - department: Department

#### JobGrade
  - id: number
  - gradeLevel: number
  - salaryLowest: number
  - salaryHighest: number

#### Department
  - id: number
  - name: string
  - manager: Manager
  - location: Location

#### Location
  - id: number
  - address_street: string;
  - address_city: string;
  - address_state: string;
  - address_zip: string;
  - country: Country

#### Country
  - id: number
  - name: string
  - region: Region

#### Region
  - id: number
  - name: string
----

### Project Management
#### Project
  - id: number
  - name: string
  - description: string
  - links: {
      github: string
      gitlab: string
      jira: string
      confluence: string
      trello: string
      asana: string
    }
  - department: Department[]
  - startDate: date
  - endDate: date
  - employees: Employee[]
  - contractors: Contractor[]
  - lead: Contractor || Employee

#### Epic
  - id: number
  - name: string
  - description: string
  - notes: string
  - project: Project

#### Story
  - id: number
  - name: string
  - description: string
  - notes: string
  - acceptanceCriteria: string
  - project: Project
  - epic: Epic

#### Task
  - id: number
  -

#### Worklog
  - id: number
  - notes: string
  - task: Task[]