SELECT c.Name as Customers FROM Customers as c WHERE c.Id NOT IN (SELECT customerId from Orders)
