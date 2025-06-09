# Phase 1: Auth & User Management
### Purpose: Set up secure user creation and login.

## Milestone: Authentication & Authorization

| Task                              | Description                                  |
| --------------------------------- | -------------------------------------------- |
| `Initialize database schema`      | Already done via `001_create_schema.sql`.    |
| `Implement registration endpoint` | Accept user details and hash passwords.      |
| `Validate registration inputs`    | Strong password rules, required fields.      |
| `Implement login endpoint`        | Validate credentials, return JWT.            |
| `Add JWT middleware`              | Verify tokens in protected routes.           |
| `Create role-aware middleware`    | Allow admin-only and school-specific access. |


# Phase 2: Schools & Associations
### Purpose: Schools are the core of EduDonate. Users (esp. admins) must be tied to one.

## Milestone: School Setup

| Task                               | Description                      |
| ---------------------------------- | -------------------------------- |
| `Create school creation endpoint`  | Admin-only route to add schools. |
| `Get all schools / search schools` | Public or admin-based access.    |
| `Link user to school`              | Upon registration or via update. |


# Phase 3: Items for Donation

### Purpose: Enable users to post and browse items.
## Milestone: Item Flow

| Task                          | Description                           |
| ----------------------------- | ------------------------------------- |
| `Create static data seed`     | For item categories, types, sizes.    |
| `Create item upload endpoint` | Users can upload items with metadata. |
| `Attach photos to items`      | Accept URLs or base64 temporarily.    |
| `List available items`        | Public or school-specific.            |
| `Mark item as unavailable`    | Once donated.                         |


# Phase 4: Item Requests

### Purpose: Allow schools/users to request specific items.
## Milestone: Request System

| Task                     | Description                         |
| ------------------------ | ----------------------------------- |
| `Submit item request`    | From user or school.                |
| `View requests`          | Admins can view & fulfill requests. |
| `Mark request fulfilled` | Linked to donations.                |


# Phase 5: Donations

### Purpose: Tie donor → item → recipient (school/user).
## Milestone: Donation Recording

| Task                       | Description                   |
| -------------------------- | ----------------------------- |
| `Create donation endpoint` | Record donation transaction.  |
| `View donation history`    | Per user or school.           |
| `Link donation to request` | If fulfilled through request. |


# Phase 6: Polish & Production Readiness

### Purpose: Make the API clean, tested, and deployable.
## Milestone: Final Touches

| Task                                   | Description                           |
| -------------------------------------- | ------------------------------------- |
| `Organize routes/controllers/services` | Follow clean architecture principles. |
| `Use proper error handling middleware` | Handle 400s, 401s, etc.               |
| `Add request logging`    | For auditing.                         |
| `Write integration tests`              | Basic tests for critical flows.       |
| `Prepare deployment`     | Containerize and test.                |
