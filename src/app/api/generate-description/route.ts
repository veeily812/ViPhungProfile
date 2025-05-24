import { NextResponse } from 'next/server';
import { generateProjectDescription } from '@/ai/flows/generate-project-description';
import { z } from 'zod';

const RequestSchema = z.object({
  projectInfo: z.string().min(10, { message: "Project information must be at least 10 characters long." }),
  writingStyle: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedFields = RequestSchema.safeParse(body);

    if (!validatedFields.success) {
      return NextResponse.json(
        { error: 'Invalid input', fieldErrors: validatedFields.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const result = await generateProjectDescription({
      projectInfo: validatedFields.data.projectInfo,
      writingStyle: validatedFields.data.writingStyle,
    });

    return NextResponse.json({ description: result.description });
  } catch (error) {
    console.error('Error generating description:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'An unknown error occurred' },
      { status: 500 }
    );
  }
} 