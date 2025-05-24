
"use client";

import { useActionState, useEffect, useRef } from 'react'; // Updated import
import { useFormStatus } from 'react-dom'; // Kept for SubmitButton
import { generateDescriptionAction } from '@/app/actions/generate-description-action';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { SectionWrapper } from '@/components/section-wrapper';
import { Bot, Sparkles, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const initialState = {
  message: '',
  description: undefined as string | undefined, // Ensure description is part of initial state type
  error: undefined as string | undefined,
  fieldErrors: undefined as Record<string, string[]> | undefined,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Generating...
        </>
      ) : (
        <>
          <Sparkles className="mr-2 h-4 w-4" />
          Generate Description
        </>
      )}
    </Button>
  );
}

export default function AiGeneratorSection() {
  const [state, formAction] = useActionState(generateDescriptionAction, initialState); // Updated usage
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message && !state.error && state.description) {
      toast({
        title: "Success!",
        description: state.message,
        variant: "default",
      });
    } else if (state.message && state.error) {
      toast({
        title: "Error!",
        description: state.message + (state.fieldErrors ? ` Details: ${Object.values(state.fieldErrors).flat().join(', ')}` : ''),
        variant: "destructive",
      });
    }
  }, [state, toast]);
  
  useEffect(() => {
    if (state.description) {
        // Optionally reset form or keep data
        // formRef.current?.reset();
    }
  }, [state.description]);


  return (
    <SectionWrapper id="ai-generator" title="AI Project Description Generator" subtitle="Craft compelling project descriptions with AI.">
      <Card className="max-w-2xl mx-auto shadow-xl">
        <CardHeader className="text-center">
          <div className="inline-flex items-center justify-center bg-primary/10 text-primary p-3 rounded-full mx-auto mb-4 w-16 h-16">
            <Bot className="w-8 h-8" />
          </div>
          <CardTitle>Generate with AI</CardTitle>
          <CardDescription>
            Input unstructured project information and optionally a writing style.
            Our AI will help you create a polished description.
          </CardDescription>
        </CardHeader>
        <form action={formAction} ref={formRef}>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="projectInfo">Project Information</Label>
              <Textarea
                id="projectInfo"
                name="projectInfo"
                placeholder="e.g., A web app for tracking personal fitness goals, built with React and Firebase. Key features include..."
                rows={5}
                required
                className="focus:ring-accent"
              />
              {state?.fieldErrors?.projectInfo && (
                <p className="text-sm text-destructive">{state.fieldErrors.projectInfo.join(', ')}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="writingStyle">Writing Style (Optional)</Label>
              <Input
                id="writingStyle"
                name="writingStyle"
                placeholder="e.g., Persuasive, Informative, Technical, Witty"
                className="focus:ring-accent"
              />
               {state?.fieldErrors?.writingStyle && (
                <p className="text-sm text-destructive">{state.fieldErrors.writingStyle.join(', ')}</p>
              )}
            </div>
            {state.description && (
              <div className="mt-6 p-4 bg-muted rounded-md">
                <h4 className="font-semibold mb-2 text-primary">Generated Description:</h4>
                <p className="text-sm text-foreground whitespace-pre-wrap">{state.description}</p>
              </div>
            )}
            {state.error && !state.fieldErrors && (
                <p className="text-sm text-destructive text-center">{state.error}</p>
            )}
          </CardContent>
          <CardFooter>
            <SubmitButton />
          </CardFooter>
        </form>
      </Card>
    </SectionWrapper>
  );
}
