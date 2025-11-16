type ErrorMessage = string | ((params: any) => string);


const VALIDATORS_ERROR_MESSAGES: Record<string, ErrorMessage> = {
  required: 'Ce champ est requis.',
  email: "L'email rentré n'est pas valide.",
  minlength: (params: any) => `La valeur doit contenir au moins ${params.requiredLength} caractères.`,
  maxlength: (params: any) => `La valeur ne doit pas dépasser ${params.requiredLength} caractères.`,
  pattern: 'Le format de la valeur est invalide.',
  matching: 'Les mots de passe ne correspondent pas.',
};

export { VALIDATORS_ERROR_MESSAGES, ErrorMessage };
