class EmployeePayrollData {
    /**
     * setter and getter methods
     * validating the user inputs using regular expression
     */
    get id(){return this._id;}
    set id(id){
        this._id =id;
    }
    get name() {
      return this._name;
    }
  
    set name(name) {
      let nameRegex = RegExp("^[A-Z]{1}[a-zA-Z\\s]{2,}$");
      if (nameRegex.test(name)) this._name = name;
      else throw "Name is incorrect";
    }
  
    get profile1() {
      return this._profile1;
    }
  
    set profile(profile1) {
      this._profile1 = profile1;
    }
  
    get gender() {
      return this._gender;
    }
  
    set gender(gender) {
      this._gender = gender;
    }
  
    get department() {
      return this._department;
    }
  
    set department(department) {
      this._department = department;
    }
  
    get salary() {
      return this._salary;
    }
  
    set salary(salary) {
      this._salary = salary;
    }
  
    get note() {
      return this._note;
    }
  
    set note(note) {
      this._note = note;
    }
  
    get startdate() {
      return this._startdate;
    }
  
    set startdate(startDate) {
              let future = new Date();
              future.setDate(future.getDate() + 30);
              if (startDate < new Date() || startDate < future)
                  this._startDate = startDate;
              else
                  throw "Date is Invalid";
          }
      
  
    toString() {
      const options = { year: "numeric", month: "long", day: "numeric" };
      const empDate = !this.start_date
        ? "undefined"
        : this.start_date.toLocaleDateString("en-US", options);
      return (
        "Name = " +
        this.name +
        ", Gender = " +
        this.gender +
        ", ProfilePic = " +
        this.profilePic +
        ", Department = " +
        this.department +
        ", Salary = " +
        this.salary +
        ", StartDate = " +
        empDate +
        ", Note = " +
        this.note
      );
    }
  }