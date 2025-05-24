import { z } from 'zod';

const ActionInputSchema = z.object({
  projectInfo: z.string().min(10, { message: "Project information must be at least 10 characters long." }),
  writingStyle: z.string().optional(),
});

export async function generateDescriptionAction(
  prevState: any,
  formData: FormData
): Promise<{ message: string; description?: string; error?: string; fieldErrors?: Record<string, string[]> }> {
  const rawFormData = {
    projectInfo: formData.get('projectInfo'),
    writingStyle: formData.get('writingStyle'),
  };

  const validatedFields = ActionInputSchema.safeParse(rawFormData);

  if (!validatedFields.success) {
    return {
      message: 'Validation failed.',
      error: 'Invalid input.',
      fieldErrors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const response = await fetch('/api/generate-description', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        projectInfo: validatedFields.data.projectInfo,
        writingStyle: validatedFields.data.writingStyle,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Failed to generate description');
    }

    return {
      message: 'Description generated successfully!',
      description: data.description,
    };
  } catch (error) {
    console.error('Error generating description:', error);
    return {
      message: 'Failed to generate description.',
      error: error instanceof Error ? error.message : 'An unknown error occurred.',
    };
  }
}
