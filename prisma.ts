import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const contact = await prisma.contact.create({
    data: {
        name: "John Doe",
        email: "qkY9M@example.com", 
        phone: "123-456-7890"
    }
})

console.info(contact)