import { createTypes } from "./ReduxHelper";

describe('Create Types', () => {
    it('should return one type', () => {
        var types = createTypes([["SignIn"]]);
        expect(Object.keys(types).length).toBe(1);
        expect(types.SIGN_IN).toBe("sign_in");
    })

    it('should give back three types', () => {
        var types = createTypes([["SignIn", true]]);
        expect(Object.keys(types).length).toBe(3);
        expect(types.SIGN_IN_SUCCESS).toBe("sign_in_success");
        expect(types.SIGN_IN_FAILURE).toBe("sign_in_failure");
        expect(types.REQUEST_SIGN_IN).toBe("request_sign_in");
    })
    
    
});