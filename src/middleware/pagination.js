export function paginate() {
  return (req, res, next) => {
    console.log("ooihioin");
    try {

        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const offset = (page - 1) * limit;

        console.log(page,limit);

        req.pagination = {
        page,
        limit,
        offset,
        };

    console.log("KVU:", req.pagination);

    next();

    } catch (error) {
        console.log("Error: ", error)
        res.status(500).json("Internal Server Error");
    }
  }
}
