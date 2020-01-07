# Notes from API Chat

```
// action = "AddedCards", or "RemovedCards"
// --- actioned_by = "Keyholder", or "Lockee"
// --- result = "<hidden>", "x*DoubleUpCard", "x*FreezeCard", "x*GreenCard", "x*RedCard", "x*ResetCard", "x*YellowAdd1Card", "x*YellowAdd2Card", "x*YellowAdd3Card", "x*YellowMinus1Card", or "x*YellowMinus2Card"
                
// action = "AddedTime", or "RemovedTime"
// --- actioned_by = "Keyholder", or "Lockee"
// --- result = "<hidden>", "x" (number of minutes)
                    
// action = "CardFreezeEnded"
// --- actioned_by = "Keyholder", or "Lockee"
                    
// action = "CardFreezeStarted"
// --- actioned_by = "Keyholder", or "Lockee"
                
// action = "Decision"
// --- actioned_by = "Lockee"
// --- result = "DecideLater", "LetKeyholderDecide", "ResetLock", "ResetLockWithSurpriseMe"

// action = "DeletedLock"
// --- actioned_by = "Lockee"
                
// action = "KeyholderFreezeEnded"
// --- actioned_by = "Keyholder"
                    
// action = "KeyholderFreezeStarted"
// --- actioned_by = "Keyholder"
                
// action = "KeyholderUpdate"
// --- actioned_by = "Keyholder"
// --- result = "HidCardInfo", "HidTimer", "ResetLock", "RevealedCardInfo", "RevealedTimer", or "UnlockedLock"
                
// action = "PickedACard"
// --- actioned_by = "Lockee"
// --- result = "DoubleUpCard", "FreezeCard", "GreenCard", "RedCard", "ResetCard", "YellowAdd1Card", "YellowAdd2Card", "YellowAdd3Card", "YellowMinus1Card", or "YellowMinus2Card"
                
// action = "RatedLock"
// --- actioned_by = "Keyholder", or "Lockee"
// --- result = "<hidden>"
                
// action = "ReadyToUnlock"
// --- actioned_by = "Lockee"
                    
// action = SetMoodEmoji
// --- actioned_by = "Keyholder", or "Lockee"
// --- result = "Emoji=x,Colour=x"
                    
// action = "StartedLock"
// --- actioned_by = "Lockee"
                    
// action = "UnlockedLock"
// --- actioned_by = "Keyholder", or "Lockee"
// --- result = "Bugged", "FreeUnlock", "GreenCard", "Key", "Naturally", or "NaturallyWithSurpriseMe"
```