import FormInternal from "./Form";
import { BaseFormData, FormOption, FormRef, FormProps } from "./types";
import useFormInternal from "./useForm";

const useForm = useFormInternal as unknown as <FormData extends BaseFormData>(
  formOption: FormOption<FormData>
) => FormRef<FormData>;

/**
 * ### Feature
 * - useForm으로 지정한 데이터 타입을 가지는 Form controller를 생성 ✅
 * - 생성된 Form 내부 자식들 중 데이터 타입의 키값을 key로 사용하는
 *   자식들이 자동으로 FormData와 연동됨(Field라고 부름) ✅
 * - FormRef를 통해 연동된 Field의 값을 확인하거나 event handler을 등록할 수 있음 ✅
 *   - Form 컴포넌트에서도 집적적으로 콜백을 등록할 수 있게 만드는게 좋을까?
 * - Form에서 field들의 focus를 관리할 수 있음 ❌
 *
 * - Form의 자식들 중에 submit이라는 키 값을 가진 컴포넌트에 자동으로 submit 기능이 연동됨 ✅
 * - 모든 field가 valid하다면 submit button이 활성화됨 ✅
 *   - valid의 조건은 모든 validator를 가진 input이 valid하면서 required로 지정된
 *     field들의 값이 `undefined | null | DefaultValue`가 아닌 경우임
 *
 * @todo Form controller 완성하기
 * @todo Form에서 한 필드가 valid해지고, 포커스를 잃으면 자동으로 다음 field로 포커스를 이동하는 기능 추가
 */
const Form = FormInternal as unknown as <FormData extends BaseFormData>(
  formProps: FormProps<FormData>
) => JSX.Element;

export { Form, useForm };

export * from "./types";
