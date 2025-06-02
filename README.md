## 🎯 **Problem Statement**

In many South African communities, countless children attend school without proper shoes, clothing, or stationery, while households and individuals regularly discard usable items due to a lack of convenient donation channels. Schools often lack structured means to communicate their specific needs, and willing donors are discouraged by time-consuming processes or uncertainty about where their contributions are needed most. This gap leads to wasted resources on one side and unmet needs on the other.

The **EduDonate** web application seeks to bridge this gap by providing a **centralized, transparent, and user-friendly platform** where individuals can easily donate school-related items (e.g., uniforms, shoes, stationery, backpacks) to specific schools in need, either as guests or registered users. Schools can also manage donation needs, fulfill requests from learners, and verify drop-offs — creating a streamlined cycle of giving and receiving.

---

## 📊 **Business Analysis**

### 1. **Business Need**

To facilitate the redistribution of gently-used school supplies and clothing in South Africa by:

* Making it easy for donors to contribute.
* Giving schools a way to list needs and receive item requests.
* Enabling traceability and trust in the donation process.

---

### 2. **Stakeholders**

| Stakeholder              | Interest/Role                                                                                        |
| ------------------------ | ---------------------------------------------------------------------------------------------------- |
| **Donors**               | Want a hassle-free platform to donate items. Some may prefer to act as guests to avoid registration. |
| **Schools/Admins**       | List needed items, manage learner requests, confirm item deliveries.                                 |
| **Learners/Students**    | Indirect beneficiaries — receive donated items via school administration.                            |
| **App Admin (Sysadmin)** | Manage platform data integrity, user support, static reference data (categories, sizes, etc.).       |

---

### 3. **Business Goals**

* 📦 **Reduce wastage** of school-related items.
* 👟 **Provide underprivileged learners** with essential gear and tools for school.
* 🤝 **Foster community involvement** through accessible donation channels.
* 🧾 **Maintain records** of donations and requests for transparency.

---

### 4. **Functional Requirements**

* Guest and authenticated user login.
* Search/filter schools by name or location.
* View school needs and donate items.
* Upload optional item photos.
* Admin dashboard for schools to:

  * Add/edit requested items.
  * Mark fulfilled items.
  * Manage learner-specific requests.
* Reference tables for:

  * Category (e.g., Shoes, Stationery)
  * Type (e.g., Pen, Pencil, Blazer)
  * Size (RSA child sizes for shoes, shirts, trousers, etc.)

---

### 5. **Non-Functional Requirements**

* ✅ Must be mobile-friendly.
* ✅ Secure data storage (PostgreSQL).
* ✅ Fast and lightweight (React frontend, Node backend).
* ✅ Deployable via Docker.
* ✅ Scalable to allow other donation types (e.g., sports gear) in future.

---

### 6. **Risks & Considerations**

* 📍 **Location bias**: Rural schools may receive fewer donations.
* ❌ **Fake entries**: Safeguards needed to avoid misuse.
* 📷 **Sensitive content**: Moderate uploaded item photos.