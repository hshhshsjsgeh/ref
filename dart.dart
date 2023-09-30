void main() {
  int s = 1
    ..isOdd
    ..toString()
    ..isNaN;

  print(s);
}

/*
void main() {
  _statement_;
  ...
}
+--------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| _statement_: _builtinFunction_ |
+--------------------------------+
[1] - print(_data_);                                                                                        ===> to show the output of `_data_`
[2] - assert(_bool_);
[3] - identical(_data_, _data_);
[4] - const _data_;
[5] - _statementControler_
  [1] - return _data_                                                                                       ===> not with `void` _datatype_
  [2] - continue
  [3] - break
  [4] - throw _error_
[6] - _object_instance_._object_instance_....;
      _object_instance_
      _memberAccessOperator__object_instance_
      ...;
+----------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| _statement_: _var_ (_object_instance_) |
+----------------------------------------+
_varDeclare_ _varName_ = _data_;

[1] - _varDeclare_
  [1] - _lateVarDeclare_ (_varControl_, ...) _datatype_?                                                    ===> can assignned later
    [1] - late (_nothing_, var, final)
  [1] - _varControl_ (_datatype_, ...)?                                                                     ===> `?` to null safety
    [1] - _nothing_ (int)?
    [2] - var ()                                                                                            ===> not with functions, no null safety
    [3] - final (_nothing_, Object, int, String, _className_, _className_)?                                 ===> not with functions
    [4] - const (_nothing_, Object, int, String, _className_, _className_)
  [2] - _datatype_
    [1] - Object
    [2] - int
    [3] - String
    [4] - _className_
    [5] - _enumName_
    [6] - _mixinName_
    [7] - List<_datatype_, ...>                                                                             ===> [_data_, ...]
    [8] - Set<_datatype_, ...>                                                                              ===> {_data_, ...}
    [9] - Map<_datatype_, _datatype_>                                                                       ===> {_data_: _data_, ...}, `_data_` in each other must matched with its `_datatype_`
+--------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| _statement_: _exp_ |
+--------------------+
[1] - _data_ _arithmeticOperator_ _data_
  [1] - _arithmeticOperator_
    [1] - +
    [2] - -
    [3] - *
    [4] - /
    [5] - ~/
    [6] - %
[2] - _prefixOperator__data_
  [1] - _prefixOperator_
    [1] - ++
    [2] - --
[3] - _data__postfixOperator_
  [1] - _postfixOperator_
    [1] - ++
    [2] - --

[4] - _data_ _relationOperator_ _data_
  [1] - _relationOperator_
    [1] - ==
    [2] - !=
    [3] - >=
    [4] - <=
    [5] - >
    [6] - <
[5] - _data_ _testTypeOperator_ _datatype_
  [1] - _testTypeOperator_
    [1] - is
    [2] - is!
    [3] - as
[6] - _data_ _assignmentOperator_ _data_
  [1] - _assignmentOperator_
    [1] - =
    [2] - +=
    [3] - -=
    [4] - *=
    [5] - /=
    [6] - ~/=
    [7] - %=
    [8] - &=
    [9] - |=
    [10] - ^=
    [11] - >>=
    [12] - <<=
    [13] - >>>=

[7] - _prefixLogicalOperator__data_
  [1] - _prefixLogicalOperator_
    [1] - !
[8] - _data_ _centeralLogicalOperator_ _data_
  [1] - &&
  [2] - ||
[9] - _data_ _centralBitOperator_ _data_
  [1] - _centralBitOperator_
    [1] - &
    [2] - |
    [3] - ^
    [4] - >>
    [5] - <<
    [6] - >>>
[10] - _prefixBitOperator__data_
  [1] - _prefixBitOperator_
    [1] - ~

[11] - _data_ _nullOperator_ _data_
  [1] - _nullOperator_
    [1] - ??

[12] - _object_instance__memberAccessOperator__object_instance_
  [1] - _memberAccessOperator_
    [1] - .
    [2] - ?.
    [3] - !-
+--------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| _statement_: _datatype_ (List) |
+--------------------------------+
[1] - ?[_data_, ...]
+-------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| _statement_: _datatype_ (Set) |
+-------------------------------+
[1] - {..._list_}                                                                                           ===> to spread list in set
+----------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| _statement_: _controlFlow_ |
+----------------------------+
[1] - _condition_
  [1] - if (_exp_) {
          _statement_;
          ...
        } else if () {
          _statement_;
          ...
        } else {
          _statement_;
          ...
        }
  [2] - (_exp_) ? _statement_ : _statement_;

[2] - _loop_
  [1] - _forLoop_
    [1] - for (_varDeclare_ _varName_ in _iterable_) {
            _statement_;
            ...
          }
    [2] - for (_varDeclare_ _varName_ = _intStart_; _conditionEnd_; _step_) {
            _statement_;
            ...
          }
  [2] - _whileLoop_
    [1] - while (_conditionEnd_) {
            _statement_;
            ...
          }

[3] - _exception_
  [1] - try {
          _statement_;
          ...
        } on _error_ catch (e) {
          _statement_;
          ...
        } finally {
          _statement_;
          ...
        }
+-------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| _statement_: _function_ |
+-------------------------+
[1] - _simpleFunction_
  [1] - _blockSimpleFunction_
    [1] - _varDeclare_ _blockSimpleFunctionName_(_varDeclare_ _varName_, ...) {
            _statement_;
            ...
            _statementControler_;
          }
          _blockSimpleFunctionName_(_data_, ...);
    [2] - _smallSimpleFunction_
      [1] - _varDeclare_ _smallSimpleFunctionName_(_varDeclare_ _varName_, ...) => _data_;
            _smallSimpleFunctionName_(_data_);
+----------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| _statement_: _class_ |
+----------------------+
[1] - _normalClass_
  [1] - 
+------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| _statement_: _library_ |
+------------------------+
import '_importingFunction_:_path_'

[1] - _importingFunction_
  [1] - 
  [2] - dart
  [3] - package
+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/
