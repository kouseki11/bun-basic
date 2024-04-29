import { z } from "zod";

const loginValidation = z.object({
    username: z.string().min(3).max(20),
    password: z.string().min(6).max(100),
})

const request = {
    username: 'Kouseki',
    password: 'kouski',
}

loginValidation.parse(request); 