export interface SuppliersType {
	supplierID: number;
	companyName: string;
	contactName: string;
	contactTitle: string;
	address: AddressType;
}

export interface AddressType {
	street: string;
	city: string;
	region: string;
	postalCode: string;
	country: string;
	phone: string;
}

export interface EmployeesType {
	employeeID: number;
	lastName: string;
	firstName: string;
	title: string;
	titleOfCourtesy: string;
	birthDate: Date;
	hireDate: Date;
	address: AddressType;
	managerID: number;
	notes: string;
	territoryIDs: Object[];
	avatarUrl: string;
}
