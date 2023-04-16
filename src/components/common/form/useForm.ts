import { useRef } from "react";

import { FormStore } from "./FormStore";
import { BaseFormData, FormOption } from "./types";

function useForm<FormData extends BaseFormData>(
  formOption: FormOption<FormData>,
  liftedFormStore?: FormStore<FormData>
) {
  const form = useRef<FormStore<FormData>>(
    liftedFormStore ?? new FormStore(formOption)
  );

  return form.current;
}

export default useForm;
