export type GplSession = {
  "version": "0.1.0",
  "name": "gpl_session",
  "instructions": [
    {
      "name": "createSession",
      "accounts": [
        {
          "name": "sessionToken",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "session_token"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "path": "target_program"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "path": "session_signer"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "path": "authority"
              }
            ]
          }
        },
        {
          "name": "sessionSigner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "targetProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "CHECK the target program is actually a program."
          ]
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "topUp",
          "type": {
            "option": "bool"
          }
        },
        {
          "name": "validUntil",
          "type": {
            "option": "i64"
          }
        }
      ]
    },
    {
      "name": "revokeSession",
      "accounts": [
        {
          "name": "sessionToken",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "session_token"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "account": "SessionToken",
                "path": "session_token.target_program"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "account": "SessionToken",
                "path": "session_token.session_signer"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "account": "SessionToken",
                "path": "session_token.authority"
              }
            ]
          },
          "relations": [
            "authority"
          ]
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "sessionToken",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "targetProgram",
            "type": "publicKey"
          },
          {
            "name": "sessionSigner",
            "type": "publicKey"
          },
          {
            "name": "validUntil",
            "type": "i64"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "ValidityTooLong",
      "msg": "Requested validity is too long"
    },
    {
      "code": 6001,
      "name": "InvalidToken",
      "msg": "Invalid session token"
    },
    {
      "code": 6002,
      "name": "NoToken",
      "msg": "No session token provided"
    }
  ]
};

export const IDL: GplSession = {
  "version": "0.1.0",
  "name": "gpl_session",
  "instructions": [
    {
      "name": "createSession",
      "accounts": [
        {
          "name": "sessionToken",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "session_token"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "path": "target_program"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "path": "session_signer"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "path": "authority"
              }
            ]
          }
        },
        {
          "name": "sessionSigner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "targetProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "CHECK the target program is actually a program."
          ]
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "topUp",
          "type": {
            "option": "bool"
          }
        },
        {
          "name": "validUntil",
          "type": {
            "option": "i64"
          }
        }
      ]
    },
    {
      "name": "revokeSession",
      "accounts": [
        {
          "name": "sessionToken",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "session_token"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "account": "SessionToken",
                "path": "session_token.target_program"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "account": "SessionToken",
                "path": "session_token.session_signer"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "account": "SessionToken",
                "path": "session_token.authority"
              }
            ]
          },
          "relations": [
            "authority"
          ]
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "sessionToken",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "targetProgram",
            "type": "publicKey"
          },
          {
            "name": "sessionSigner",
            "type": "publicKey"
          },
          {
            "name": "validUntil",
            "type": "i64"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "ValidityTooLong",
      "msg": "Requested validity is too long"
    },
    {
      "code": 6001,
      "name": "InvalidToken",
      "msg": "Invalid session token"
    },
    {
      "code": 6002,
      "name": "NoToken",
      "msg": "No session token provided"
    }
  ]
};
