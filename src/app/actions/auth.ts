
import { SignupFormSchema, FormState } from "../lib/definitions";

export async function signup(state: FormState, formData: FormData): Promise<FormState> {
    const validatedFields = SignupFormSchema.safeParse({
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password'),
    });

    console.log("validate fields",validatedFields)
  
    if (!validatedFields.success) {
      const errors = validatedFields.error.flatten().fieldErrors;
      
      return {
        errors: {
          name: errors.name ?? [],
          email: errors.email ?? [],
          password: errors.password ?? [],
        },
        message: 'Invalid form data',
      };
    }
  
    // return { message: 'User created successfully' };

    // 2. Prepare data for insertion into database
    // const {name, email, password} = validatedFields.data

    //e.g Hash the user's password before storing it
    // const hashedPassword = await bcrypt.hash(password, 10)

    //3. Insert the user into the database or call an Auth Library's API

  }
  